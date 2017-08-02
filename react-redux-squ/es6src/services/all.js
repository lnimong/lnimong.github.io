import { GetJson } from '../tools'

import { actionShowUsers } from '../actions'

export default (d) => ({

	GetUsers: () => 
		GetJson ("https://randomuser.me/api/?seed=foobar&results=20").
		then(
			json => d.dispatch(actionShowUsers(
				json.results.map(({name, email, phone, picture, login}) => ({
					name: name.title + " " + name.last + " " + name.first,
					details:email + "-" + phone,
					picurl:picture.thumbnail,
					id:login.username
				}))
			))
		)
})