const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    topMargin: {
        paddingTop: theme.spacing.unit * 5,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    textField: {
        padding: theme.spacing.unit,
        width: 400,
    },
    thumbnail: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        width: 100,
        height: 100,
    },
    inputFile: {
        width: theme.spacing.unit * 0.1,
        height: theme.spacing.unit * 0.1,
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1,
    },
    card: {
        width: 345,
        height: 345,
        overflowY: 'scroll',
        boxShadow: theme.shadows[2],
    },
    media: {
        height: 140,
    },
    mediaLarge: {
        height: '45vh',
        width: '45vh',
        objectFit: 'scale-down',
    },
    pictureContainer: {
        boxShadow: theme.shadows[5],
    },
});
export default styles;
