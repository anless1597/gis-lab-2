import { useState } from 'react';
import { Labelled } from '../common/Labelled';
import { NumberInput } from '../common/NumberInput';
import { defaultMapSettings, MapSettings } from './MapSettings';
import { defaultMapState, MapState } from './MapState';
import { MapWidget } from './MapWidget';
import './MapWidgetDemo.css';

export function MapWidgetDemo() {
	const [maxWidth, setMaxWidth] = useState<number>(2000);
	const [maxHeight, setMaxHeight] = useState<number>(1000);
	const [mapState, setMapState] = useState<MapState>(defaultMapState);
	const [mapSettings, setMapSettings] = useState<MapSettings>(defaultMapSettings);
	const [coorX, setCoorX] = useState<number>(0);
	const [coorY, setCoorY] = useState<number>(0);
	const centerStep = 10 * Math.pow(0.5, mapState.mapZoom);
	return (
		<div className="MapWidgetDemo">
			<div className="MapWidgetDemo-state">
				<Labelled label="max width">
					<NumberInput
						min={0}
						max={10000}
						step={1}
						value={maxWidth}
						onChange={setMaxWidth}
					></NumberInput>
				</Labelled>
				<Labelled label="max height">
					<NumberInput
						min={0}
						max={10000}
						step={1}
						value={maxHeight}
						onChange={setMaxHeight}
					></NumberInput>
				</Labelled>
				<Labelled label="centerX">
					<NumberInput
						min={-10}
						max={10}
						step={centerStep}
						value={mapState.centerX}
						onChange={value => setMapState({ ...mapState, centerX: value })}
					></NumberInput>
				</Labelled>
				<Labelled label="centerY">
					<NumberInput
						min={-10}
						max={10}
						step={centerStep}
						value={mapState.centerY}
						onChange={value => setMapState({ ...mapState, centerY: value })}
					></NumberInput>
				</Labelled>
				<Labelled label="zoom">
					<NumberInput
						min={mapSettings.minZoom}
						max={mapSettings.maxZoom}
						step={0.5}
						value={mapState.mapZoom}
						onChange={value => setMapState({ ...mapState, mapZoom: value })}
					></NumberInput>
				</Labelled>
				<Labelled label="debug">
					<input
						type="checkbox"
						checked={mapSettings.debug}
						onChange={event => setMapSettings({ ...mapSettings, debug: event.target.checked })}
					></input>
				</Labelled>
				<div>
					<Labelled label="X">
	`					<NumberInput
							min={-90}
							max={90}
							value={coorX}
							onChange={value => setCoorX(value)}
						></NumberInput>
`					</Labelled>
					<Labelled label="Y">
						<NumberInput
							min={-180}
							max={180}
							value={coorY}
							onChange={value => setCoorY(value)}
						></NumberInput>
					</Labelled>
				</div>
			</div>
			<MapWidget
				mapState={mapState}
				onMapStateChange={setMapState}
				mapSettings={mapSettings}
				coorX={coorX}
				coorY={coorY}
				style={{
					maxWidth,
					maxHeight,
				}}
			></MapWidget>
		</div>
	);
}
