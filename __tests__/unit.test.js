// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone2', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(true);
});

test('invalid phone', () => {
  expect(isPhoneNumber('hi')).toBe(false);
});

test('invalid phone2', () => {
  expect(isPhoneNumber('')).toBe(false);
});

test('valid email', () => {
  expect(isEmail('jac054@ucsd.edu')).toBe(true);
});

test('valid email2', () => {
  expect(isEmail('h@ucsd.edu')).toBe(true);
});

test('invalid email', () => {
  expect(isEmail('@ucsd.edu')).toBe(false);
});

test('invalid email2', () => {
  expect(isEmail('hi@ucsdedu')).toBe(false);
});

test('good password', () => {
  expect(isStrongPassword('hello')).toBe(true);
});

test('good password2', () => {
  expect(isStrongPassword('Hello______')).toBe(true);
});

test('bad password1', () => {
  expect(isStrongPassword('fffffffffffffffffffffffffffffffffffffffffffffffffffffff')).toBe(false);
});

test('bad password2', () => {
  expect(isStrongPassword('sdfsff%')).toBe(false);
});

test('good date', () => {
  expect(isDate('03/05/2004')).toBe(true);
});

test('good date', () => {
  expect(isDate('00/00/0000')).toBe(true);
});

test('bad date', () => {
  expect(isDate('123//5563')).toBe(false);
});

test('bad date2', () => {
  expect(isDate('ab/cd/edfh')).toBe(false);
});

test('valid code1', () => {
  expect(isHexColor('#123')).toBe(true);
});

test('valid code2', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('invalid code1', () => {
  expect(isHexColor('#ffffffff')).toBe(false);
});

test('invalid code2', () => {
  expect(isHexColor('fffffff')).toBe(false);
});



