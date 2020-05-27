import React from "react";
import Form from "react-bootstrap/Form";
import {SignInForm} from "../../../../../soldier-care-package2/app/src/shared/components/main-nav/sign-in/SignInForm";
import Container from "react-bootstrap/Container";

import {RequestForm} from "./RequestForm";


export const Create = () => {
	return (
		<>
			<Container>
				<RequestForm/>
			</Container>
		</>
	)
}
