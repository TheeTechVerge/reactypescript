import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";

type AppProps = {
	sendSearchQuery?(): void;
};

const App: FC<AppProps> = ({ sendSearchQuery = () => undefined }) => {
	const [searchValue, setSearchValue] = React.useState<string>("");

	const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const search = () => {
		sendSearchQuery();
	};

	return (
		<div className='App'>
			<input
				value={searchValue}
				onChange={onSearchInput}
				name='search'
				type='text'
			/>
			<button onClick={search}>Search</button>
		</div>
	);
};

export default App;
