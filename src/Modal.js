import { useState, createContext, useContext } from "react";
import Modal from "react-modal";

const ModalContext = createContext();

const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) throw new Error("must be used within a ModalProvider");
	return context;
};

//ignore useCallback for simplicity
const ModalProvider = (props) => {
	const [modalText, setModalText] = useState(null);

	return (
		<ModalContext.Provider
			value={[modalText, setModalText]}
		>
			{props.children}
			<Modal
				isOpen={!!modalText}
				ariaHideApp={false}
				shouldCloseOnOverlayClick
				/*onRequestClose={}*/
			>
				<h2>{modalText}</h2>
			</Modal>
			<span>hello</span>
		</ModalContext.Provider>
	);
};

export { ModalProvider, useModal };
