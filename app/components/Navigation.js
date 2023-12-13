'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './styles/styles.navigation.module.css'; 


const Navigation = ({ navLinks }) => {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const linkClasses = isActive ? `${styles.link} ${styles.active}` : styles.link;
                return (
                    <Link key={link.label} href={link.href}
                    className={linkClasses}>
                        {link.label}
                    </Link>
                );
            })}
        </>
    );
};

export { Navigation };