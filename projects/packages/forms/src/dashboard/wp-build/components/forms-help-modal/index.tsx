/**
 * WordPress dependencies
 */
import {
	Button,
	Modal,
	__experimentalText as Text, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	__experimentalVStack as VStack, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	__experimentalHStack as HStack, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

/**
 * Help modal explaining why some forms don't appear in the Forms list.
 *
 * This is intended for the wp-build "Forms" screen, where the list shows managed forms only.
 *
 * @param props         - Component props.
 * @param props.isOpen  - Whether the modal is open.
 * @param props.onClose - Close handler.
 * @return The modal element, or null when closed.
 */
export default function FormsHelpModal( { isOpen, onClose }: Props ) {
	if ( ! isOpen ) {
		return null;
	}

	return (
		<Modal
			title={ __( 'Some of your existing forms may not appear here yet', 'jetpack-forms' ) }
			onRequestClose={ onClose }
		>
			<VStack spacing="4">
				<Text>
					{ createInterpolateElement(
						__(
							'Forms you already added to pages or posts will continue to work. To manage them in this dashboard, open the page or post, select the form, and click <strong>Edit form</strong> once.',
							'jetpack-forms'
						),
						{ strong: <strong /> }
					) }
				</Text>
				<HStack spacing="3" justify="flex-end">
					<Button variant="tertiary" onClick={ onClose }>
						{ __( 'Dismiss', 'jetpack-forms' ) }
					</Button>
					<Button
						variant="primary"
						href={ new URL( 'edit.php?post_type=page', window.location.origin ).toString() }
					>
						{ __( 'View pages', 'jetpack-forms' ) }
					</Button>
				</HStack>
			</VStack>
		</Modal>
	);
}
