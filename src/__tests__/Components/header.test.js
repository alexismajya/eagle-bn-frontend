import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as checkToken from '../../helper/helper';
import Header from '../../App/Components/Header';
import SideNav from '../../App/Components/SideNav';
import helper from '../../helper/test.helper';
import data from '../../__mocks__/data/header.data';

Enzyme.configure({
	adapter: new Adapter(),
});
describe('Header', () => {
	it('should have a side-nav-bar', done => {
		checkToken.default = jest.fn();
		checkToken.default
			.mockReturnValueOnce({
				fullname: 'lemoisson',
			})
			.mockReturnValueOnce({
				role: 'requester',
			});
		const store = helper.mockStore(data.mockData.successState);
		const wrapper = helper.mountNewWrapper(store, <Header showSideNav={true} />);
		expect(wrapper.find(SideNav)).toExist();
		expect(wrapper.find('.navbar-nav.ml-auto')).toExist();
		done();
	});
	it('should have menu-active class', done => {
		checkToken.default = jest.fn();
		checkToken.default
			.mockReturnValueOnce({
				fullname: 'lemoisson',
			})
			.mockReturnValueOnce({
				role: 'requester',
			});
		const store = helper.mockStore(data.mockData.successState);
		const wrapper = helper.mountNewWrapper(store, <Header showSideNav={false} />);
		wrapper
			.find('.navbar-toggler')
			.first()
			.simulate('click');
		expect(wrapper.find(SideNav)).not.toExist();
		done();
	});
});
