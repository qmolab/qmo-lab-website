export function convertTagsToArray(tags) {
  if (!tags || tags === 0) return [];
  const arr = [];
  for (let i = 0; i < 20; ++i) {
    if (tags & (1 << i)) arr.push(1 << i);
  }
  return arr;
}
export const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
export const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export function urlRule(message = 'Invalid URL') {
  return (v) => !v || urlPattern.test(v) || message;
}
export function emailRule(message = 'Invalid email') {
  return (v) => !v || emailPattern.test(v) || message;
}
export function lengthRule(maxLength, fieldName = '') {
  const message = `${fieldName} must be less than ${maxLength} chars`;
  return (v) => !v || v.length <= maxLength || message;
}
export function lengthMinRule(minLength, fieldName = '') {
  const message = `${fieldName} must be greater than ${minLength} chars`;
  return (v) => !v || v.length >= minLength || message;
}
export function requiredRule(message = 'This item is required') {
  return (v) => !!v || message;
}
export function inputRules(e, fieldName = 'Item') {
  const rules = [];
  if (/email/gi.test(e.name)) rules.push(emailRule());
  else if (/web|href/gi.test(e.name)) rules.push(urlRule());
  if (e.maxLength) rules.push(lengthRule(e.maxLength, fieldName));
  if (e.required) rules.push(requiredRule());
  return rules;
}

export function rndNumBetween(a, b) {
  return Math.floor((b - a + 1) * Math.random()) + a;
}

export function formatDate(a, withTime) {
  return withTime
    ? a.toISOString().replace('T', ' ').slice(0, 16)
    : a.toISOString().replace('T', ' ').slice(0, 10);
}

export const eventColors = [
  'deep-purple',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green darken-1',
  'orange darken-1',
];
export function nth(d) {
  return d > 3 && d < 21
    ? 'th'
    : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10];
}

export function dtStrToYrNum(prop) {
  return parseInt(prop.slice(0, 4));
}

export function dtStrToMonNum(prop) {
  return parseInt(prop.slice(5, 7));
}

export function dtStrToDayNum(prop) {
  return parseInt(prop.slice(8, 10));
}

export function dtStrToHrNum(prop) {
  return parseInt(prop.slice(11, 13));
}

export function dtStrToMinNum(prop) {
  return parseInt(prop.slice(14));
}

export class CalendarEvent {
  constructor(
    name = '',
    startDate = new Date(),
    endDate = new Date(),
    details = '',
    id = -1,
    allDay = false
  ) {
    // These variables may be edited
    this.name = name;
    this.end = formatDate(endDate, !this.allDay);
    this._start = formatDate(startDate, !this.allDay);
    this.details = details;
    this.allDay = allDay;

    // These variables are read only
    this._isNew = id <= 0;
    this._id = id;
    this._color = eventColors[rndNumBetween(0, eventColors.length - 1)];

    this.save();
  }

  get start() {
    return this._start;
  }

  set start(val) {
    // If new date is bigger than old end date, make old end date equal to new date plus 30 minutes
    this._start = val;
    if (this.startDaysAD > this.endDaysAD) this.endDate = this.startDate;
    if (this.startMinsAM > this.endMinsAM) this.endTime = this.startTime;
  }

  get startDate() {
    return this._start.slice(0, 10);
  }

  get startTime() {
    return this._start.slice(11);
  }

  get endDate() {
    return this.end.slice(0, 10);
  }

  get endTime() {
    return this.end.slice(11);
  }

  set startDate(val) {
    this.start = val + this.start.slice(10);
  }

  set startTime(val) {
    this.start = this.start.slice(0, 11) + val;
  }

  set endDate(val) {
    this.end = val + this.end.slice(10);
  }

  set endTime(val) {
    this.end = this.end.slice(0, 11) + val;
  }

  get startDaysAD() {
    return (
      dtStrToYrNum(this.start) * 365.2422 +
      dtStrToMonNum(this.start) * 30.43685 +
      dtStrToDayNum(this.start)
    );
  }

  get endDaysAD() {
    return (
      dtStrToYrNum(this.end) * 365.2422 +
      dtStrToMonNum(this.end) * 30.43685 +
      dtStrToDayNum(this.end)
    );
  }

  get startMinsAM() {
    return dtStrToHrNum(this.start) * 60 + dtStrToMinNum(this.start);
  }

  get endMinsAM() {
    return dtStrToHrNum(this.end) * 60 + dtStrToMinNum(this.end);
  }

  get id() {
    return this._id;
  }

  get color() {
    return this._color;
  }

  get isNew() {
    return this._isNew;
  }

  save(id = 0) {
    /// Figure out some way to change _startDate and _endDate
    // These variables are backup and should be read only
    this._originalName = this.name;
    this._originalStartDate = this.start;
    this._originalEndDate = this.end;
    this._originalDetails = this.details;
    if (id > 0) {
      this._id = id;
      this._isNew = false;
    }
  }

  reset() {
    // These variables are backup and should be read only
    this.name = this._originalName;
    this.start = this._originalStartDate;
    this.end = this._originalEndDate;
    this.details = this._originalDetails;
  }

  daysOverlap(e) {
    return (
      this.startDaysAD === e.startDaysAD ||
      (this.startDaysAD > e.startDaysAD
        ? e.endDaysAD >= this.startDaysAD
        : this.endDaysAD >= e.startDaysAD)
    );
  }

  timesOverlap(e) {
    return (
      this.startMinsAM === e.startMinsAM ||
      (this.startMinsAM > e.startMinsAM
        ? e.endMinsAM > this.startMinsAM
        : this.endMinsAM > e.startMinsAM)
    );
  }

  overlaps(e) {
    return e._id !== this._id && this.daysOverlap(e) && this.timesOverlap(e);
  }

  valueOf() {
    return this._id;
  }

  hasChanged() {
    return !(
      this._originalName === this.name &&
      this._originalStartDate === this.start &&
      this._originalEndDate === this.end &&
      this._originalDetails === this.details
    );
  }

  payload() {
    const payload = {
      name: this.name,
      start: this.start,
      end: this.end,
      details: this.details,
    };
    if (!this._isNew) payload.id = this.id;
    else payload.new = true;
    return JSON.stringify(payload);
  }
}
