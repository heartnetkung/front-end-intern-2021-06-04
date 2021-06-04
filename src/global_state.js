import { useState, useContext, createContext } from "react";

const GlobalStateContext = createContext();

const peopleDefault = [{ name: "Sara" }, { name: "Tar" }];

const Provider = (props) => {
	const [people, setPeople] = useState(peopleDefault);

	const addPeople = (people) => {
		setPeople((allPeople) => {
			return [...allPeople, people];
		});
	};

	const removePeople = (name) => {
		setPeople(() => {
			//loop
			//return new value without changing people directly
			return people.filter((a) => a.name !== name);
		});
	};

	return (
		<GlobalStateContext.Provider
			value={{ people, addPeople, removePeople }}
		>
			{props.children}
		</GlobalStateContext.Provider>
	);
};

export { GlobalStateContext, Provider };
