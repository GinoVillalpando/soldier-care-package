import {useState, useEffect} from "react";
import * as jwtDecode from "jwt-decode";


export const UseJwt = () => {

		const [jwt, setJwt] = useState(null);

		useEffect(() => {
            setJwt(window.localStorage.getItem("jwt-token"));
		}, []);
	return jwt;
};

export const UseJwtProfileUsername = () => {
		const[profileUsername, setProfileUsername] = useState(null);

		useEffect(() => {
			const token = window.localStorage.getItem("jwt-token");
			if(token !== null) {
                const decodeJwt = jwtDecode(token);
                setProfileUsername(decodeJwt.auth.profileUsername);
			}
        }, []);
		return profileUsername;
};

export const UseJwtProfileEmail = () => {
		const[profileEmail, setProfileEmail] = useState(null);

		useEffect(() => {
			const token = window.localStorage.getItem("jwt-token");
			if(token !== null) {
                const decodeJwt = jwtDecode(token);
                console.log(token)
                setProfileEmail(decodeJwt.auth.profileEmail);
                console.log(decodeJwt)
			}
        }, []);
		return profileEmail;
};

export const UseJwtProfileId = () => {
		const [profileId, setProfileId] = useState(null);

		useEffect(() => {
			const token = window.localStorage.getItem("jwt-token");
			if(token !== null) {
				const decodeJwt = jwtDecode(token);
				setProfileId(decodeJwt.auth.profileId);
			}
		}, []);
		return profileId;
};