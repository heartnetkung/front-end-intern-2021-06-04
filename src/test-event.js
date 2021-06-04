import {useEffect} from 'react';


const TestEvent = () => {
	useEffect(() => {
	 const initWidth = window.innerWidth;
	 function onSizeChange () {
	 	const newWidth = window.innerWidth;
	 	console.log('newWidth: ', newWidth)
	 }
	 window.addEventListener('resize', onSizeChange);
	 return () => window.removeEventListener('resize', onSizeChange);
	},[])
	return null;
}

export default TestEvent;