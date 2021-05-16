export type Attribute = {
	name: string;
	value: string;
};
export class CreateAttribute {
	constructor(public name: string, public value: string) {}
}
