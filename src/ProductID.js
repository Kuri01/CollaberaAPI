import React from 'react';

class ProductForm extends React.Component {
  state = {
    productId: {
      isValidated: false,
      value: '',
    },
    productName: {
      isValidated: false,
      value: undefined,
    },
    productPrice: {
      isValidated: false,
      value: undefined,
    },
    manufacturingDate: {
      isValidated: false,
      value: undefined,
    },
    expDate: {
      isValidated: false,
      value: undefined,
    },
    allowConfirm: false,
  };

  productIdValidation = () => {
    const { productId } = this.state;

    if (productId.value !== '') {
      this.setState({
        productId: { isValidated: true, ...this.state.productId },
      });
    } else {
      this.setState({
        productId: { isValidated: false, ...this.state.productId },
      });
    }
  };

  productNameValidation = () => {
    const { productName } = this.state;

    if (productName.value !== '' && productName.value.length > 3) {
      this.setState({
        productName: { ...this.state.productName, isValidated: true },
      });
    } else {
      this.setState({
        productName: { ...this.state.productName, isValidated: false },
      });
    }
  };

  productPriceValidation = () => {
    const { productPrice } = this.state;
    if (productPrice.value.isNaN() === false) {
      this.setState({
        productPrice: { ...this.productPrice, isValidated: true },
      });
    } else {
      this.setState({
        productPrice: { ...this.productPrice, isValidated: false },
      });
    }
  };

  panufacturingDateValidation = () => {};

  expDateValidation = () => {};

  formValidation = () => {
    const { productId, productName, productPrice, manufacturingDate, expDate } =
      this.state;
    if (
      productId.isValidated &&
      productName.isValidated &&
      productPrice.isValidated &&
      manufacturingDate.isValidated &&
      expDate.isValidated
    ) {
      this.setState({ allowConfirm: true });
    } else {
      this.setState({ allowConfirm: false });
    }
  };

  updateState = (updateType, data) => {
    switch (updateType) {
      case 'productId':
        this.setState({ productId: { ...this.state.productId, value: data } });
        this.productIdValidation();
        console.log(this.state);
        break;
      case 'productName':
        this.setState({
          productName: { ...this.state.productName, value: data },
        });
        break;
      case 'productPrice':
        this.setState({
          productPrice: { ...this.state.productPrice, value: data },
        });
        break;
      case 'manufacturingDate':
        this.setState({
          manufacturingDate: { ...this.state.manufacturingDate, value: data },
        });
        break;
      case 'expDate':
        this.setState({ expDate: { ...this.state.expDate, value: data } });
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <p>productId</p>

            <input
              value={this.state.productId.value}
              onChange={(e) => this.updateState('productId', e.target.value)}
            />
          </div>
          <div>
            <p>productName</p>

            <input
              value={this.state.productName.value}
              onChange={(e) => this.updateState('productName', e.target.value)}
            />
          </div>
          <div>
            <p>productPrice</p>

            <input
              value={this.state.productPrice.value}
              onChange={(e) => this.updateState('productPrice', e.target.value)}
            />
          </div>
          <div>
            <p>Manufacturing date</p>

            <input
              value={this.state.manufacturingDate.value}
              onChange={(e) =>
                this.updateState('manufacturingDate', e.target.value)
              }
            />
          </div>
          <div>
            <p>exp date</p>

            <input
              value={this.state.expDate.value}
              onChange={(e) => this.updateState('expDate', e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
