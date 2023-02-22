import { motion } from "framer-motion"
import { FC } from "react"
import styles from "./PageTransition.module.scss"

const variantsFinal = {
	hidden: { opacity: 0, zIndex: 1 },
	enter: { opacity: 1, zIndex: 0 },
	exit: { opacity: 0, zIndex: 1 },
}

type Props = {
    children: React.ReactNode
}

const PageTransition: FC<Props> = ({children}) => {
	return (
		<motion.main
			className={styles.main}
			variants={variantsFinal}
			initial="hidden"
			animate="enter"
			exit="exit"
			transition={{
				opacity: { duration: 0.3 },
			}}
		>
			{children}
		</motion.main>
	)
}

export default PageTransition