import React from "react";
import { withRouter } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import {
  BsCart3,
  BsSearch
} from "react-icons/bs";
import { VscHome, VscAccount } from "react-icons/vsc";
import { ImSearch } from "react-icons/im";

class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          switchView: true,
          value: 0
        };
    }
    render(){
        return (
            <Box sx={{ pb: 5 }}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingLeft: 1, paddingRight: 1, paddingTop: 0.5, paddingBottom: 0.5, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} elevation={6}>
                    <BottomNavigation
                        value={this.state.value}
                        onChange={(event, newValue) => {
                            this.setState({
                                value: newValue
                            })
                        }}
                        >
                        <BottomNavigationAction
                            style={{
                                color: this.state.value === 0 ? "white" : "#d57121",
                                fontSize: 20,
                                backgroundColor: this.state.value === 0 ? "#d57121" : "white",
                                borderRadius: 10
                            }}
                            label="Home"
                            icon={<VscHome size={this.state.value === 0 ? 25 : 22} className="nav-icons"
                            style={{
                                color: this.state.value === 0 ? "white" : "#d57121"
                            }}/>}
                        />
                        <BottomNavigationAction
                            style={{
                                color: this.state.value === 1 ? "white" : "#d57121",
                                fontSize: 20,
                                backgroundColor: this.state.value === 1 ? "#d57121" : "white",
                                borderRadius: 10
                            }}
                            label="Search"
                            icon={<ImSearch size={this.state.value === 1 ? 25 : 20} className="nav-icons"
                            style={{
                                color: this.state.value === 1 ? "white" : "#d57121"
                            }}/>}
                        />
                        <BottomNavigationAction
                            style={{
                                color: this.state.value === 2 ? "white" : "#d57121",
                                fontSize: 20,
                                backgroundColor: this.state.value === 2 ? "#d57121" : "white",
                                borderRadius: 10
                            }}
                            label="Cart"
                            icon={<BsCart3 size={this.state.value === 2 ? 25 : 22} className="nav-icons"
                            style={{
                                color: this.state.value === 2 ? "white" : "#d57121"
                            }}/>}
                        />
                         <BottomNavigationAction
                            style={{
                                color: this.state.value === 3 ? "white" : "#d57121",
                                fontSize: 20,
                                backgroundColor: this.state.value === 3 ? "#d57121" : "white",
                                borderRadius: 10
                            }}
                            label="Account"
                            icon={<VscAccount size={this.state.value === 3 ? 25 : 22} className="nav-icons"
                            style={{
                                color: this.state.value === 3 ? "white" : "#d57121"
                            }}/>}
                        />
                    </BottomNavigation>
                </Paper>
            </Box>
        );
    }
}
export default withRouter(Tabs);
