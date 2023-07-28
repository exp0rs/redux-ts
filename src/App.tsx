import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import { useEffect } from 'react';

export const App = () => {
	const { loading, error, users } = useTypedSelector((state) => state.user);
	const { fetchUser } = useActions();
	useEffect(() => {
		fetchUser();
	}, []);
	if (error) return <div>error</div>;
	if (loading) return <div>loadin</div>;
	return (
		<div>
			{users.map((user) => (
				<div>
					<span>{user.name}</span>
				</div>
			))}
		</div>
	);
};
