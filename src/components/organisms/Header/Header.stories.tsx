/* eslint-disable import/no-anonymous-default-export */
import { Header } from './Header';

export default {
	title: 'organisms/Header',
	component: Header,
};

export const HeaderStory = () => <Header />;

HeaderStory.storyName = 'Header';
