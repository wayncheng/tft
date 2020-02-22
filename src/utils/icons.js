// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { } from '@fortawesome/free-brands-svg-icons'
import { 
	faInfoCircle,
	faInfo,
	faExternalLinkAlt,
	faChevronLeft,
	faLongArrowAltLeft,
	faLongArrowAltRight,
	faTimes,
	faBullseye,
	faHistory,
	faRedo,
	faUndo,
	faTrash,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import {
	faTrashAlt,
	// faQuestionCircle,
} from '@fortawesome/free-regular-svg-icons'



const buildIconLibrary = () => {
	library.add(
		faInfo,
		faInfoCircle,
		faTimes,
		faExternalLinkAlt,
		faLongArrowAltLeft,
		faChevronLeft,
		faLongArrowAltRight,
		faBullseye,
		faHistory,
		faRedo,
		faUndo,
		faTrash,
		faTrashAlt,
		faQuestionCircle,
		// faDice,
		// faDiceSix,
		// faHandPointer,
		// faDiceOne,
		// faDiceFive,
		// faClipboardCheck,
	)
}
export default buildIconLibrary;

// Examples ----------------------------------------
// <FontAwesomeIcon icon='trash-alt' />
// <FontAwesomeIcon icon={['far','trash-alt']} /> 
//--------------------------------------------------
