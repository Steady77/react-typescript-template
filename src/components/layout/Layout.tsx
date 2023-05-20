import { FC, PropsWithChildren } from 'react';

import styles from './layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return <section className={styles.layout}>{children}</section>;
};

export default Layout;
