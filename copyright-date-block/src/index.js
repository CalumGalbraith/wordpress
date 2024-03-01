/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';



/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
const calendarIcon = (
	<svg 
		viewBox="0 0 24 24" 
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
		>
			<path d="m19 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5h-14c-.3 0-.5-.2-.5-.5v-12h15zm-10.5-9h-2v2h2zm0 4h-2v2h2zm4-4h-2v2h2zm4 0h-2v2h2zm-4 4h-2v2h2zm4 0h-2v2h2z"/></svg>
);

registerBlockType( metadata.name, {
	icon: calendarIcon,
	edit: Edit,
} );
