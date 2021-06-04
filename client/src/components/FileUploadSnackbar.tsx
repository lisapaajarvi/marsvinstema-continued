import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
	snackbar: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	button: {
		backgroundColor: 'rgba(239,239,239,255)',
		borderColor: 'rgb(113, 113, 113)',
		fontSize: '0.75rem',
		textTransform: 'capitalize',
		fontWeight: 400,
		color: 'rgb(5, 5, 5)',
		marginTop: '0.2rem',
		padding: ' 0.01rem 0.3rem 0.01rem',
		fontFamily: 'Tahoma',
		borderRadius: '2px',
	},
}));

export default function FileUploadSnackbar() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<div className={classes.snackbar}>
			<Button
				className={classes.button}
				size='small'
				variant='outlined'
				onClick={handleClick}
			>
				Ladda upp
			</Button>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					Bilden har laddats upp!
				</Alert>
			</Snackbar>
		</div>
	);
}
