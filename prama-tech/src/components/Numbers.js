import React, { Component } from "react";
import { Col} from "react-bootstrap";

class Numbers extends Component{
        constructor () {
          super();
          this.state = {value: ''};
        }
        txtNum(e) {
          this.setState({ inputvalue: e.target.value.replace(/\D/g, '') });
        }

    render() {
        return (
            <>
        
                 <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="mobile"
                  name="user_number"
                  value={this.state.inputvalue}
                  onChange={this.txtNum.bind(this)}
                  placeholder="Enter Only Mobile Number"
                  type="text"
                  required
                />
              </Col>
            
            </>
        )
    }
}
export default Numbers;