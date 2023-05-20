import App from 'app';
import { FC } from 'react';

interface Routes {
	path: string;
	component: FC;
}

export const routes: Routes[] = [
	{
		path: '/',
		component: App,
	},
];
