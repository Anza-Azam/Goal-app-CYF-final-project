import { useState, React } from "react";
import "./SignUp.css";

import { Link } from "react-router-dom";

import Popup from "./Components/Popup";
import { headers } from "../utils/generalPostObjects";
import fetchData from "../utils/fetchData";
const SignUp = () => {
	const [text, setText] = useState("");
	const [popup, setPopup] = useState(false);
	const createNewAccount = (e) => {
		e.preventDefault();
		const methodObj = {
			method: "POST",
			headers,
			body: JSON.stringify({
				name,
				email,
				password,
				slackid
			}),
		};
		fetchData("/register", methodObj)
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					
					setText(data.message);
					setPopup(true);
				}
				//window.alert(data.message);
				else {
					location.assign("/");
					localStorage.setItem("t", data.user);
				}
			})
			.catch((e) => console.log(e));
	};

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
const [slackid, setSlackid] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = (e) => {
		if (e) {
			if (e.target.name === "username") {
				setName(e.target.value);
			} else if (e.target.name === "password") {
				setPassword(e.target.value);
			}
			 else if (e.target.name === 'slackid') {
				setSlackid(e.target.value);
			}
				else setEmail(e.target.value)

			setPopup(false);
		}
	};
	return (
		<div className="signup-ctn">
			<h2>Create A New Account</h2>
			<p>
				Come and join the HTCT community! Let's set up your account. Already
				have one?{" "}
				<Link className="temporary-link" to="/">
					Sign in here
				</Link>
			</p>
			{popup && <Popup text={text} />}
			<div className="s-form">
				<form action="" method="post" className="signup-form">
					<div className="form-field">
						<div className="label-ctn">
							<label htmlFor="name">Name</label>
						</div>
						<input
							type="text"
							name="username"
							id="name"
							placeholder="your name"
							required
							onChange={(e) => {
								handleChange(e);
							}}
						></input>
					</div>
					<div className="form-field">
						<div className="label-ctn">
							<label htmlFor="email">Email</label>
						</div>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="mail@abc.com"
							required
							onChange={(e) => {
								handleChange(e);
							}}
						></input>
					</div>
					<div className="form-field">
						<div className="label-ctn">
							<label htmlFor="password">Password</label>
						</div>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="*********"
							required
							onChange={(e) => {
								handleChange(e);
							}}
						></input>
					</div>
					<div className="form-field">
						<div className="label-ctn">
							<label htmlFor="slackid">Slackid</label>
						</div>
						<input
							type="text"
							name="slackid"
							id="slackid"
							placeholder="slackid"
							required
							onChange={(e) => {
								handleChange(e);
							}}
						></input>
					</div>
					<div>
						<button
							className="login-btn"
							onClick={(e) => {
								createNewAccount(e);
							}}
						>
							Create Account{" "}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;

