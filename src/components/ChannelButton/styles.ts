import styled from 'styled-components';
import { PersonAdd, Settings } from 'styled-icons/material'
import { Hashtag } from 'styled-icons/heroicons-outline'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 5px;
    border-radius: 5px;

    background-color: transparent;

    transition: .2s;

    > div {
        display: flex;
        align-items: center;
    }

    > div span{
        margin-left: 5px;
        color: var(--senary);

    }

    #invite-and-settings {
        display: none;
    }
    &.active, &:hover {
        background-color: var(--quinary);

        > div span {
            color: var(--white)
        }

        #invite-and-settings{
            display: inline;
        }
    }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 20px;
    height: 20px;
    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;


