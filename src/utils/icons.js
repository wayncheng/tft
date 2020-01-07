// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { } from '@fortawesome/free-brands-svg-icons'
import { 
	faInfoCircle,
	faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'


const buildIconLibrary = () => {
	library.add(
		faInfoCircle,
		faExternalLinkAlt,
	)
}
export default buildIconLibrary;