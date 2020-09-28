import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import styles from './form.module.css';
import { setNotify } from '../../redux/actions';
import { postFormValueAsync } from '../../redux/operations';

// { items, setNotify, getFormValueAsync, getFormValueFromFireBase }
function Form() {
  const [state, setState] = useState({ name: '', number: '' });

  const dispatch = useDispatch();
  const items = useSelector(state => state.phonebook.contacts.items);

  const handleNameChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const hanndleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (state.name === '' || state.number === '') {
      return;
    } else {
      const input = e.target.elements;
      let flag = true;

      items.map(el => (el.name === input[0].value ? (flag = false) : ''));

      flag
        ? dispatch(
            postFormValueAsync({
              name: input[0].value,
              number: input[1].value,
            }),
          )
        : dispatch(setNotify(true));
    }

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={hanndleSubmit}>
      <label className={styles.label}>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={handleNameChange}
        ></input>
      </label>
      <label className={styles.label}>
        Phone:
        <input
          className={styles.input}
          type="tel"
          name="number"
          onChange={handleNameChange}
        ></input>
      </label>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  getContact: PropTypes.func,
  getName: PropTypes.func,
};

// const mapStateToProps = state => ({ items: state.contacts.items });

// const mapDispatchToProps = { setNotify, getFormValueAsync, getFormValueFromFireBase };

// export default connect(mapStateToProps, mapDispatchToProps)(Form);

export default Form;
//
//
//
//
//
//
//
//
//
//? На классах
// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleNameChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//     this.props.getName(this.state.name);
//   };

//   hanndleSubmit = e => {
//     e.preventDefault();
//     this.props.getContact({ ...this.state, id: uuidv4() });
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={styles.form} onSubmit={this.hanndleSubmit}>
//         <label className={styles.label}>
//           Name:
//           <input
//             className={styles.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleNameChange}
//           ></input>
//         </label>
//         <label className={styles.label}>
//           Phone:
//           <input
//             className={styles.input}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleNameChange}
//           ></input>
//         </label>

//         <button className={styles.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
