import classNames from 'classnames';
import { CommonProps } from '../common/CommonProps';
import './Dot.css';

export function Dot(props: Readonly<{
	dotX:number;
	dotY:number;
}> & CommonProps) {
	return (
		<div
			className={classNames('Dot', props.className)}
			style={{
				// left: props.dotX,
				// top: props.dotY,
				transform: `translate3d(${Math.round(props.dotX)}px, ${Math.round(props.dotY)}px, 0px)`,
				...props.style,
			}}
		></div>
	);
}
