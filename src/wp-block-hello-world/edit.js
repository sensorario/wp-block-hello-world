import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import './editor.scss';
import { Button, ButtonGroup, PanelBody, RadioControl, TextControl } from '@wordpress/components';

// https://chatgpt.com/c/68230cd3-5eb8-8011-ad8c-a2f1b4370897

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const [count, setCount] = useState(isNaN(attributes.counter) ? 0 : attributes.counter);

	const { counter, content } = attributes

	console.log({
		counter,
		content,
	})

	const startingYear = 2020;

	return (
		<div {...blockProps}>
			<p>{__('Hai cliccato er bottone', 'wp-block-hello-world')} {count} volte.</p>

			<Button variant="primary" onClick={() => {
				const newValue = count + 1
				setCount(newValue);
				setAttributes({
					counter: newValue,
					content: `${newValue} volte cliccato il bottone`,
				});
			}
			}>
				{__('Cliccami', 'wp-block-hello-world')}
			</Button>

			<RadioControl
				label="User type"
				help="The type of the current user"
				options={[
					{ label: 'Author', value: 'a' },
					{ label: 'Editor', value: 'e' },
				]}
				onChange={(value) => console.log(value)}
			/>

			<p>{__('Clicca il bottone per incrementare di una unita il contatore.', 'wp-block-hello-world')}</p>
		</div>
	);
}