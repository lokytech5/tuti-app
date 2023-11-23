type ShippingMethod = 'standard' | 'express';

export default function calculateShippingCost(method: ShippingMethod, location: string): number {
    const adjustedLocation = location.replace(" State", "").toLowerCase();

    const northStates = ['adamawa', 'kaduna', 'niger', 'jigawa', 'plateau', 'gombe', 'sokoto', 'kano', 'kebbi', 'bauchi', 'nasarawa', 'borno', 'yobe', 'kwara', 'kogi', 'taraba', 'benue', 'katsina', 'zamfara'];
    const southStates = ['akwa ibom', 'bayelsa', 'cross river', 'delta', 'edo', 'ekiti', 'rivers'];
    const eastStates = ['abia', 'ebonyi', 'anambra', 'enugu', 'imo'];
    const westStates = ['lagos', 'ogun', 'ondo', 'osun', 'oyo'];

    let baseCost: number;
    if (northStates.includes(adjustedLocation)) {
        baseCost = 4500;
    } else if (southStates.includes(adjustedLocation)) {
        baseCost = 4000;
    } else if (eastStates.includes(adjustedLocation)) {
        baseCost = 4000;
    } else if (westStates.includes(adjustedLocation)) {
        baseCost = 3500;
    } else {
        throw new Error(`Invalid state: ${location}`);
    }

    switch (method) {
        case "standard":
            return baseCost + 1000;
        case "express":
            return baseCost + 2000;
        default:
            throw new Error(`Invalid shipping method: ${method}`);
    }
}
