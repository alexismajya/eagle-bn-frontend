import React from 'react';
import { shallow } from 'enzyme';
import SidNav from '../../App/Components/SideNav';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as checkToken from '../../helper/helper';
import Menu from '../../App/Components/Menu';

Enzyme.configure({
	adapter: new Adapter(),
});
describe('single request', () => {
	it('Should return request sideNav menu', done => {
		checkToken.default = jest.fn();
		checkToken.default.mockReturnValue({
			fullname: 'lemoisson',
			role: 'requester',
		});
		const wrapper = shallow(<SidNav />);
		expect(wrapper.find(Menu)).toExist();
		done();
	});
	it('Should return host side nav menu', done => {
		checkToken.default = jest.fn();
		checkToken.default.mockReturnValueOnce({
			fullname: 'lemoisson',
			role: 'host',
		});
		const wrapper = shallow(<SidNav />);
		expect(wrapper.find(Menu)).toExist();
		done();
	});
	it('Should return host side nav menu', done => {
		checkToken.default = jest.fn();
		checkToken.default.mockReturnValueOnce({
			fullname: 'admin',
			role: 'admin',
		});
		const wrapper = shallow(<SidNav />);
		expect(wrapper.find(Menu)).toExist();
		done();
	});
	it('Should return host side nav menu', done => {
		checkToken.default = jest.fn();
		checkToken.default.mockReturnValueOnce({
			fullname: 'Tadmin',
			role: 'Tadmin',
		});
		const wrapper = shallow(<SidNav />);
		expect(wrapper.find(Menu)).toExist();
		done();
	});
	it('Should return host side nav menu', done => {
		checkToken.default = jest.fn();
		checkToken.default.mockReturnValueOnce({
			fullname: 'manager',
			role: 'manager',
		});
		const wrapper = shallow(<SidNav />);
		expect(wrapper.find(Menu)).toExist();
		done();
	});
	it('Should return  empty menu', done => {
		checkToken.default = jest.fn();
		checkToken.default.mockReturnValueOnce({
			fullname: 'lemoisson',
			role: 'kekeke',
		});
		const wrapper = shallow(<SidNav />);
		expect(wrapper.find(Menu)).not.toExist();
		done();
	});
});
