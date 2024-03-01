/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import { PanelBody, TextControl, ToggleControl } from '@wordpress/components'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { showStartingYear, startingYear, showSiteTitle, siteTitle } = attributes;
	const currentYear = new Date().getFullYear().toString();

	let displayDate;
	let displaySiteTitle

	if ( showStartingYear && startingYear ) {
		displayDate = startingYear + '-' + currentYear;
	} else {
		displayDate = currentYear;
	}

	if ( showSiteTitle && siteTitle ) {
		displaySiteTitle = siteTitle
	} else {
		displaySiteTitle = "";
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
					
					<ToggleControl
						checked={ !! showStartingYear }
						label={ __(
							'Show starting year',
							'copyright-date-block'
						) }
						onChange={ () =>
							setAttributes( {
								showStartingYear: ! showStartingYear,
							} ) 
						}
						/>
						{ showStartingYear && (
				<TextControl
					label={ __(
						'Starting year',
						'copyright-date-block'
						) }
						value={ startingYear || '' }
						onChange={ ( value ) =>
							setAttributes( { startingYear: value } )
						}
						/>
						) }
						<ToggleControl
							checked={ !! showSiteTitle }
							label={ __(
								'Add site title',
								'copyright-date-block'
							) }
							onChange={ () =>
								setAttributes( {
									showSiteTitle: ! showSiteTitle,
								} ) }
						/>
						{ showSiteTitle && (
				<TextControl
					label={ __(
						'Add Site Title',
						'copyright-date-block'
						) }
						value={ siteTitle || '' }
						onChange={ ( value ) =>
							setAttributes( { siteTitle: value } )
						}
						/>
						) }
						
				</PanelBody> 
			</InspectorControls>
		<p { ...useBlockProps() }>{ siteTitle } © { displayDate }</p>
		</>
	);
}
