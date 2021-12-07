"use strict";
/**
 * Here we have an array for each of our 'entities' (students, teachers) and they share a property `class` that defines what class they are in.
 */
const school1 = {
  students: [
    { name: "Rob", class: 1 },
    { name: "Fede", class: 2 },
  ],
  teachers: [{ name: "Stas", class: 1 }],
};

/**
 * In this representation we have the classes property that has an array per class of everyone in that class.
 * We do not need a class property as we have the classes array, but as we do not specify a students or teachers array we have to add a `role` property
 */
const school2 = {
  classes: [
    [
      { name: "Rob", role: "student" },
      { name: "Stas", role: "teacher" },
    ],
    [{ name: "Fede", role: "student" }],
  ],
};
