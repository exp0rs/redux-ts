import { useState } from 'react';

interface CounterProps {
	className?: string;
}

export const Counter = ({ className }: CounterProps) => {
	const [count, setCount] = useState(0);
	const handleSetCount = (v: number) => {
		setCount(count + v);
	};
	return (
		<div>
			{count}
			<button onClick={() => handleSetCount(1)}>+</button>
			<button onClick={() => handleSetCount(-1)}>-</button>
		</div>
	);
};
