import GoogleTokenStrategy from "passport-google-id-token"
import { GOOGLE_CLIENT_ID } from "../utils/secrets"
import User from "../models/User"

//need to fill it it tipes folder
import { ParsedToken, VerifiedCallback } from "../types"


// need to change logic; if role === Role.admin
const adminEmail = "parviz.azimov@integrify.io"


export default function () {
	return new GoogleTokenStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
		},
		async (
			parsedToken: ParsedToken,
			googleId: string,
			done: VerifiedCallback
		) => {
			try {
				console.log("googleId:", googleId)
				console.log("parsedToken:", parsedToken)

				let user: any = await User.findOne({
					email: parsedToken.payload.email,
				})
				if (!user) {
					user = new User({
						email: parsedToken.payload.email,
						firstName: parsedToken.payload.given_name,
						lastName: parsedToken.payload.family_name,
						isAdmin: parsedToken.payload.email === adminEmail,
					})
					user.save()
				}

				done(null, user)
			} catch (error) {
				done(error)
			}
		}
	)
}

