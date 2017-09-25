import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import { signUpUser } from '../../../actions/SignUpFormActions'

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignUpFormSubmit: (name) => {
            //event.preventDefault();

            dispatch(signUpUser(name))
        }
    };
};

const SignUpFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm);

export default SignUpFormContainer
