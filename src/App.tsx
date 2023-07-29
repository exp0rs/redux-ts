import { useEffect } from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';

export const App = () => {
	const { loading, error, users } = useTypedSelector((state) => state.user);
	const { fetchUsers } = useActions();
	useEffect(() => {
		fetchUsers();
	}, []);
	if (error) return <div>error</div>;
	if (loading) return <div>loadin</div>;
	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>
					<span>{user.name}</span>
				</div>
			))}
		</div>
	);
};
