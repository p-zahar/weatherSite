// ====================================================
// IMPORTS
// Main
import styles from './search.module.scss'
import { Formik } from 'formik'
import { colours } from '../../../../variables/coloursVars'
import { useHistory } from 'react-router'
import * as queryString from 'querystring'

// ====================================================
// Component

const style = {
	header: {},
	navlink: {
		color: `${colours.firstTextColor}`,
	},
}

const Search = props => {
	const history = useHistory()
	const parsedUrl = queryString.parse(history.location.search.substr(1))

	// ====================================================
	// JSX

	return (
		<div>
			<Formik
				initialValues={{ city: '' }}
				validate={values => {
					const errors = {}
					if (!values.search) {
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					history.push({
						pathname: '',
						search: `day=${+parsedUrl.day}&city=${values.city}`,
					})
					props.setSearching(true)
					props.getInf(values.city)
					setSubmitting(false)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<>
						<form onSubmit={handleSubmit} className={styles.form}>
							<input
								className={styles.input}
								type="text"
								name="city"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder={'Search your city'}
							/>

							<button
								disabled={isSubmitting}
								className={styles.button}
								type="submit"
							>
								<img src="/images/whiteTheme/common/search.svg" alt="" />
							</button>
						</form>
					</>
				)}
			</Formik>
		</div>
	)
}

// ====================================================
// Exports

export default Search