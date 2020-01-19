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
	// faDice,
	// faDiceSix,
	// faHandPointer,
	// faDiceOne,
	// faDiceFive,
	// faClipboardCheck,
	// faExchangeAlt,
	// faArrowsAltH,
	// faArrowLeft,
	// faArrowCircleLeft,
	// faRandom,
	// faCompressAlt,
	// faAngleDoubleLeft,
	// faAngleLeft,
	// faCaretLeft,
	// faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons'
import {
	// faHandPointer,
	// faCaretSquareLeft,
	// faArrowAltCircleLeft,
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
		// faDice,
		// faDiceSix,
		// faHandPointer,
		// faDiceOne,
		// faDiceFive,
		// faClipboardCheck,
	)
}
export default buildIconLibrary;