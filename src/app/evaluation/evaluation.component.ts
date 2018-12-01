import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { EvaluationService } from './evaluation.service';
import { convertData } from '../utils/date';
import { FormBuilder, FormGroup, Validators, FormArray } from '../../../node_modules/@angular/forms';
import { ToEvaluteService } from '../to-evalute/to-evalute.service';
import { Global } from '../services/global';

@Component({
	selector: 'app-evaluation',
	templateUrl: './evaluation.component.html',
	styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

	evaluation: any;
	convert = convertData;
	user: any = null;

	form: FormGroup;
	evaluationId: any;

	position: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private EvaluationService: EvaluationService,
		private fb: FormBuilder,
		private service: ToEvaluteService,
		private global: Global
	) { }

	ngOnInit() {
		this.evaluation = this.route.snapshot.data.evaluation[0];

		this.route.params.subscribe(params => {
			this.evaluationId = params.id
			if (params.user){
	
				const evalutedPosition = this.evaluation.answers.filter(item => item.evaluted == this.user)[0]
	
				const evaluterPos = evalutedPosition.evaluterAnswer.filter(item => item.evaluter == this.global.user)[0]
	
				this.position = evaluterPos
				this.user = params.user
			} 
		})

		this.form = this.fb.group({
			sections: this.fb.array(this.evaluation.questions.map((item: any, index) => this.createSection(item, index)))
		})

		this.evaluation = this.evaluation.answers.map(evaluted => {
			evaluted.evaluterAnswer = evaluted.evaluterAnswer.map((evaluter, index) => {
				evaluter.position = index;
				return evaluter;
			})

			return evaluted
		})

	}

	createSection(section, index): FormGroup {

		let fg = this.fb.group({
			name: section.name,
			evaluterComment: section.evaluterComment,
			na: section.na,
			required: section.required,
			competences: this.fb.array(
				this.getCompetence(index)
			)
		})

		if (section.required) {
			let f = fg.controls.competences as FormArray;
			f.controls.map((item: FormArray) => {
				item.controls["comment"].setValidators(Validators.required);
			})
		}

		return fg;
	}

	getCompetence(index) {
		let toReturn: any = this.evaluation.questions[index];
		return toReturn.competences.reduce((prevCompetence: any, competence: any) => prevCompetence.concat(
			this.createCompetence(competence)
		), [])
	}

	createCompetence(competence: any) {
		let fg;
		if (!competence.behaviors) {
			fg = this.fb.group({
				name: competence.name,
				description: competence.description,
				questions: this.fb.array(competence.questions),
				behaviors: competence.behaviors,
				answer: ['', Validators.required],
				comment: ['']
			})
		}
		else {
			fg = this.fb.group({
				name: competence.name,
				description: competence.description,
				behaviors: competence.behaviors,
				comment: [''],
				behavior: this.fb.array(this.getBehaviors(competence.answers))
			})
		}
		return fg;
	}

	getBehaviors(behaviors) {
		return behaviors.reduce((prev, val) => prev.concat(
			this.createBehaviors(val)
		), [])
	}

	createBehaviors(behavior: any) {
		return this.fb.group({
			title: behavior.title,
			options: this.fb.array(behavior.options),
			answerBehavior: ['', Validators.required]
		})
	}

	submit(event) {
		event.preventDefault();

		let data = this.schema();

		if (this.user) {
			this.service
				.update(this.evaluationId, this.user, this.global.user, this.position.position, data)
				.subscribe(result => {
					console.log(result)
					this.router.navigate(['home']);
				})
		}
		else {
			this.EvaluationService
				.evalutedAnswer(this.evaluationId, data)
				.subscribe((result) => {
					this.router.navigate(['home']);
				})
		}
	}

	schema() {
		return {
			question: this.getSectionsAnswers(),
			date: new Date()
		}
	}

	getSectionsAnswers() {
		const getOnlyBehavior = (competence) => {
			return [competence.behavior.reduce((prev, item) => prev.concat(
				{
					value: item.answerBehavior
				}
			), [])]
		}

		const getOnlyCompetence = (section) => {
			return [section.competences.reduce((prev, item) => prev.concat(
				item.behaviors ? { values: getOnlyBehavior(item), comment: item.comment } : { value: item.answer, comment: item.comment }
			), [])]
		}

		return this.form.getRawValue()
			.sections.reduce((prevSec, section) => prevSec.concat(
				getOnlyCompetence(section)
			), [])
	}


}
