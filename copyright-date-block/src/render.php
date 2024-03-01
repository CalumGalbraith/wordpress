<?php
$current_year = date ( "Y" );
if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
	$display_date = $attributes['startingYear'] . '-' . $current_year;
} else {
	$display_date = $current_year;
}
if ( ! empty( $attributes['siteTitle'] ) && ! empty( $attributes['showSiteTitle'] ) ) {
	$site_title = $attributes['siteTitle'];
} else {
	$site_title = 'Jobby';
}
?>
<p <?php echo get_block_wrapper_attributes(); ?>><?php echo esc_html( $site_title ); ?> © <?php echo esc_html( $display_date ); ?></p>
