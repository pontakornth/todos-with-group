import styled from '@emotion/styled';

export const TextInput = styled.input`
    border-radius: 4px;
    padding: 0.5rem;
    border: 1px solid rgba(125,125,125,0.75);
    display:block;
`;

export const ErrorMessage = styled.p`
    color: #d9534f;
    padding: 1rem;
`;

export const TextArea = TextInput.withComponent('textarea');
