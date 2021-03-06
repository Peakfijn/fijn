import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { typography, TypographyProps } from './typography';

export const Caption = styled.span<TypographyProps>`
	${typography}
`;

Caption.defaultProps = {
	vx: 'typography',
	variant: 'caption',
};

export const captionStyle: StyleObject = {
	display: 'block',
	textAlign: 'center',
};
