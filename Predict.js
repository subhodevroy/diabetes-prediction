import React,{Component} from "react";
class Predict extends Component{
	constructor(){
		super();
		this.state={
			num_preg:"",
			glucose_conc:"",
			diastolic_bp:"",
			thickness:"",
			insulin:"",
			bmi:"",
			diab_pred:"",
			age:"",
			skin:""	
		};
	}
	handleChange=(name)=>(event)=>{
		
		this.setState({[name]:event.target.value});
	}
	

	predictForm =(num_preg,glucose_conc,diastolic_bp,thickness,insulin,bmi,diab_pred,age,skin) =>(
		<form action="{{ url_for('predict')}}"method="post">
			<div className="form-group">
			<label className="text-muted">Num_Preg</label>
			<input onChange={this.handleChange("num_preg")} name="num_preg" type="text" className="form-control" value={num_preg}/>
			</div>
			<div className="form-group">
			<label className="text-muted">Glucose_Conc</label>
			<input onChange={this.handleChange("glucose_conc")} name="glucose_conc"type="text" className="form-control" value={glucose_conc}/>
			</div>
			<div className="form-group">
			<label className="text-muted">Dialostic_bp</label>
			<input onChange={this.handleChange("diastolic_bp")} name="diastolic_bp" type="text" className="form-control" value={diastolic_bp}/>
			</div>
			<div className="form-group">
			<label className="text-muted">Thickness</label>
			<input onChange={this.handleChange("thickness")} name="thickness" type="text" className="form-control" value={thickness }/>
			</div>
			
			<div className="form-group">
			<label className="text-muted">Insulin</label>
			<input onChange={this.handleChange("insulin")} name="insulin" type="text" className="form-control" value={insulin}/>
			</div>
			<div className="form-group">
			<label className="text-muted">BMI</label>
			<input onChange={this.handleChange("bmi")} name="bmi"type="text" className="form-control" value={bmi}/>
			</div>
			<div className="form-group">
			<label className="text-muted">Diab_pred</label>
			<input onChange={this.handleChange("diab_pred")} name="diab_pred" type="text" className="form-control" value={diab_pred}/>
			</div>
			<div className="form-group">
			<label className="text-muted">Age</label>
			<input onChange={this.handleChange("age")} name="age" type="text" className="form-control" value={age }/>
			</div>
			<div className="form-group">
			<label className="text-muted">Skin</label>
			<input onChange={this.handleChange("skin")} name="skin" type="text" className="form-control" value={skin }/>
			</div>

			<button type="submit"  className="btn btn-raised btn-primary">Predict</button>
			</form>
			);
	render(){
		const {num_preg,glucose_conc,diastolic_bp,thickness,insulin,bmi,diab_pred,age,skin} =this.state;
		return(
			<div className="container">
			<h2 className="mt-5 mb=5">Check For Diabetes</h2>
			
			{this.predictForm(num_preg,glucose_conc,diastolic_bp,thickness,insulin,bmi,diab_pred,age,skin)}
			<p>
   			
   			</p>

			</div>
		);
}
}
export default Predict;