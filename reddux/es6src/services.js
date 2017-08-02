import { receiveWall, receivePub } from './actions'

function getJSON(url) {
  'use strict';
  var xhr = new XMLHttpRequest();
  var d = Promise.defer();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        d.resolve(JSON.parse(xhr.responseText));
      } else {
        d.reject(xhr.responseText);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
  return d.promise;
}



class QueryService {

	constructor () {
		this.d = {
			dispatch : () => {}
		}
	}

	SetDispatcher (dispatcher) {
		this.d = dispatcher
	}

	GetPublication (pub) {

		getJSON("./es6src/api/preview").then( 
			(data) => {
				this.d.dispatch (receivePub({
					content : data.data.content,
					head : pub
				}))
			}
		)
	}

	GetWall () {

		getJSON("./es6src/api/wall").then( 
			(data) => {
				this.d.dispatch (receiveWall(
					data.data.publications
				))
			}
		)
	}

}


export default QueryService