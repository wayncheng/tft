// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { } from '@fortawesome/free-brands-svg-icons'
import { 
	faInfoCircle,
	faExternalLinkAlt,
	faDice,
	faDiceSix,
	faHandPointer,
	faChevronLeft,
	faLongArrowAltLeft,
	faLongArrowAltRight,
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
		faInfoCircle,
		faExternalLinkAlt,
		faDice,
		faDiceSix,
		faHandPointer,
		// faDiceOne,
		// faDiceFive,
		// faClipboardCheck,
		faLongArrowAltLeft,
		faChevronLeft,
		faLongArrowAltRight,
	)
}
export default buildIconLibrary;