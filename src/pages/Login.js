import React, {Component as RC} from 'react';
import Page from '../components/Page';
import { render } from 'react-dom';
import { input } from 'react-dom';
// import Banner from '../components/Banner';
import {LoggedInContext} from '../Context';
import {Redirect} from 'react-router-dom';
import './Post.css';

export default class Login extends RC {
    constructor(props) {
        super(props);
    
        this.state = {
          active: (props.locked && props.active) || false,
          value: props.value || "",
          error: props.error || "",
          label: props.label || "Author",
          label: props.label || "Date"
        };
      }
    
      changeValue(event) {
        const value = event.target.value;
        this.setState({ value, error: "" });
      }
    
      handleKeyPress(event) {
        if (event.which === 13) {
          this.setState({ value: this.props.predicted });
        }
      }
    
      render() {
        const { active, value, error, label } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
          "active"} ${locked && !active && "locked"}`;
    
        return (
            <Page>
          <div className={fieldClassName}>
            {active &&
              value &&
              predicted &&
              predicted.includes(value) && <p className="predicted">{predicted}</p>}
            <input
              id={1}
              type="text"
              value={value}
              placeholder={label}
              onChange={this.changeValue.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
              onFocus={() => !locked && this.setState({ active: true })}
              onBlur={() => !locked && this.setState({ active: false })}
            />
            
            <label htmlFor={1} className={error && "error"}>
              {error || label}
            </label>
          </div>
          
          </Page>
        );
      }
    }
    
    render(
        <input
          id={1}
          label="Author"
          predicted="California"
          locked={false}
          active={false}
        />,
        document.getElementById("root")
      );
      