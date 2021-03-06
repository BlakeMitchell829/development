import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/dashboardStyles';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton, Divider, Typography, List, Toolbar, AppBar, Drawer, CssBaseline } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon, Menu as MenuIcon } from '@material-ui/icons';
import { MainListItems, secondaryListItems } from './drawerItems';
import MakeListing from './AddProducts/MakeListing';
import ViewProducts from './AddProducts/ViewProducts';

class Dashboard extends React.Component {
    state = {
        open: false,
        isAuthenticated: true,
        anchorEl: null,
        currentPage: 'MakeListing',
    };

    handleDashBoardChange = arg => {
        const obj = {
            MakeListing: <MakeListing />,
            ViewProducts: <ViewProducts />,
        };
        if (!obj[arg]) {
            return obj.AddProducts;
        }
        return obj[arg];
    };

    handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    handleLoginChange = event => {
        this.setState({
            isAuthenticated: event.target.checked,
        });
    };

    handleLoginMenu = event => {
        let final = this.state.anchorEl === null ? event.currentTarget : null;
        this.setState({
            anchorEl: final,
        });
    };

    pageState = (event, name) => {
        this.setState(state => {
            state.currentPage = name;
            return state;
        });
    };

    // Other applets can go here, then assign in drawerItems the corresponding key as the argument to this function there

    render() {
        // This is how we access the "styles", from dashboardStyles.js. This is because we use the material-ui "withStyles(styles)(Dashboard)" function. our "props" here, is classes.
        const { classes } = this.props;
        const { isAuthenticated, anchorEl } = this.state;
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    {/* <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classNames(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                Placeholder
                            </Typography>
                        </Toolbar>
                    </AppBar> */}
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}>
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerToggle}>
                                {this.state.open ? <ChevronLeftIcon /> : <MenuIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <MainListItems
                                pageState={this.pageState}
                                opened={this.state.open}
                                auth={isAuthenticated}
                                anchorEl={anchorEl}
                                handleLoginMenu={this.handleLoginMenu}
                                handleLoginChange={this.handleLoginChange}
                            />
                        </List>
                        <Divider />
                        <List>{secondaryListItems}</List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <div className={classes.tableContainer}>
                            {/* Seems like component // applets can go here */}
                            {this.handleDashBoardChange(this.state.currentPage)}
                        </div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
