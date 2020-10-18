import { Object3D, Scene } from 'three';

type T_intersectListener = () => void;

interface Listers {
	intersects: T_intersectListener;
}

abstract class Entity extends Object3D {
	private listers: { [key in keyof Listers]: Listers[key][] };

	private dispatch<name extends keyof Listers>(
		listerName: name,
		...dispatchArgs: Parameters<Listers[name]>
	) {
		this.listers[listerName].forEach(async (listner) =>
			listner.call(null, dispatchArgs)
		);
	}

	registerListener<name extends keyof Listers>(
		listerName: name,
		lister: Listers[name]
	) {
		this.listers[listerName].push(lister);
	}

	render(scene: Scene) {
		scene.add(this);
	}
}
